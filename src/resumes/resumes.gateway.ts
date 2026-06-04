import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: 'http://localhost:5173', credentials: true },
})
export class ResumesGateway {
  @WebSocketServer()
  server: Server;

  emitDone(id: string) {
    this.server.emit('generate:done', { id });
  }

  emitFailed(id: string) {
    this.server.emit('generate:failed', { id });
  }
}