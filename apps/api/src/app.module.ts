import { Module } from "@nestjs/common";
import { McpModule, McpTransportType } from "@rekog/mcp-nest";
import { CountingTool } from "./counting-tool";
@Module({
  imports: [
    McpModule.forRoot({
      name: "snapflow-mcp",
      version: "0.0.1",
    }),
  ],
  providers: [CountingTool],
})
export class AppModule {}
