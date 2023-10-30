const int pinAnalogico = 15; // Exemplo de pino analógico no ESP32

void setup() {
  // Inicializa o monitor serial
  Serial.begin(115200);
  int maximo;

  // Define o pino como entrada analógica
  pinMode(pinAnalogico, INPUT);
}

void loop() {
  // Lê o valor analógico do pino
  int valorAnalogico;
  int maximo =0;
  for(int i = 0; i<30; i++){
    valorAnalogico = analogRead(pinAnalogico);
    if(maximo < valorAnalogico){maximo = valorAnalogico;}
    delay(100);
  }

  // Imprime o valor lido no monitor serial
  Serial.print("Valor Analógico: ");
  Serial.println(maximo);

  delay(1000); // Aguarda 1 segundo antes da próxima leitura
}