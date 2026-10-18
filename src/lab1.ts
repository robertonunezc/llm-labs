import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI();

const bankStatement = `
Estado de cuenta - Octubre 2026

01/10/2026 OXXO      -150.00
02/10/2026 NOMINA  +25000.00
03/10/2026 AMAZON    -850.00
04/10/2026 UBER      -120.00
05/10/2026 WALMART   -950.00

`;

async function main() {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    instructions:
      "Eres un asistente que analiza movimientos bancarios.",
    input: `
      Identifica las transacciones del siguiente texto.
      ${bankStatement}
    `,
  });

  console.log("Respuesta:");
  console.log(response.output_text);

  console.log("\nTokens:");
  console.log(response.usage);
}

main().catch(console.error);