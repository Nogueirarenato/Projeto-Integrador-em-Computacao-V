
#include <LiquidCrystal_I2C.h>
#include "EmonLib.h"

LiquidCrystal_I2C LCD = LiquidCrystal_I2C(0x27, 16, 2);
EnergyMonitor SCT013;

int pinSCT = 15;
int tensao =127;
int potencia;
int a =0;


void setup() {
  Serial.begin(115200);
  SCT013.current(pinSCT, 90.90);
  LCD.init();
  LCD.backlight();
  LCD.setCursor(0, 0);
  LCD.print("Ola Mundo");
  LCD.setCursor(0, 1);
  LCD.print("Univesp ");
  
 delay(1000);

}

void loop() {
  double Irms = SCT013.calcIrms(1024);
  potencia = Irms * tensao;
  LCD.clear();
  LCD.setCursor(0,0);
  LCD.print ("Cor. ");
  LCD.print(Irms);
  LCD.print(" A");
  
  
  LCD.setCursor(0,1);
  LCD.print("Pot. = ");
  LCD.print(potencia);
  LCD.print(" W");
  delay(1000);
}
