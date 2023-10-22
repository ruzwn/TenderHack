import { HttpTransportType, HubConnectionBuilder } from "@microsoft/signalr";
import { BASE_URL } from "@/services/api"
import {app} from '@/main'

export class Signalr {
    private constructor() {
        const connection = this.createConnection();
        const notificationHub = connection.createHubProxy("notificationHub", BASE_URL);

        notificationHub.on("sendMessage", (message) => {
            Signalr.hubs.notificationHub.sendMessage.forEach((handler) => {
                handler(message);
            });
        });

        connection.start();

        // Обработчики по умолчанию
        Signalr.hubs.notificationHub.sendMessage.push((message: string) => {
            app.config.globalProperties.$toast.add({ severity: 'info', summary: 'Оповещение', detail: message, life: 3000 });
        });
    }

    /**
     * Создать обертку над подключениями
     * @returns {{start: start, createHubProxy: (function(*): *)}}
     */
    private createConnection () {
        return {
            /**
             * Создать подключение к хабу
             * @param path путь к хабу
             * @param baseUrl url к сервису
             */
            createHubProxy: (path: String, baseUrl: String) => {
                if (!Object.prototype.hasOwnProperty.call(Signalr.connections, path)) {
                    Signalr.connections[path] = new HubConnectionBuilder().withUrl(baseUrl + path, {
                        transport: HttpTransportType.WebSockets,
                        skipNegotiation: true,
                    }).build();
                }

                return Signalr.connections[path];
            },

            /**
            * Запустить все подключения
            */
            start: () => {
                for (const key in Signalr.connections) {
                    Signalr.connections[key].start();
                }
            },
        };
    }

    static hubs = {
        notificationHub: {
            sendMessage: [],
        }
    };

    static connections = {};

    private static _instance: Signalr;
    public static getInstance(): Signalr {
        return this._instance || (this._instance = new this());
    }
}
