const int sensorLuz = A0;
const int pinLuz = 9;
const int umbralLuz = 500;

void setup() {
  pinMode(pinLuz, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  controlarIluminacion();
  delay(500);
}

void controlarIluminacion() {
  int intensidadLuz = analogRead(sensorLuz);
  Serial.println(intensidadLuz);

  if (intensidadLuz < umbralLuz) {
    encenderLuz();
  } else {
    apagarLuz();
  }
}

void encenderLuz() {
  digitalWrite(pinLuz, HIGH);
}

void apagarLuz() {
  digitalWrite(pinLuz, LOW);
}
