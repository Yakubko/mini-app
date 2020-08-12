import winston from 'winston';
import appRoot from 'app-root-path';
import { Options } from 'morgan';
import { IncomingMessage, ServerResponse } from 'http';

const accessLogger = winston.createLogger({
    exitOnError: false,
    transports: [],
});

const accessLoggerTransports = {
    file: new winston.transports.File({
        level: 'http',
        filename: `${appRoot}/logs/access.log`,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        handleExceptions: true,
    }),
    console: new winston.transports.Console({
        level: 'http',
        format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple()),
    }),
};

export function morganOption(environment?: string): Options<IncomingMessage, ServerResponse> {
    accessLogger.clear();
    accessLogger.add(accessLoggerTransports.file);
    if (environment !== 'production') {
        accessLogger.add(accessLoggerTransports.console);
    }

    return {
        stream: {
            write: (message: string): void => {
                accessLogger.http(message.trim());
            },
        },
    };
}
