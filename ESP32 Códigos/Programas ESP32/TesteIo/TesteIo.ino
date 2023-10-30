#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include "EmonLib.h"


EnergyMonitor SCT013;
LiquidCrystal_I2C lcd(0x27, 16, 2);

int pinSCT = 15;
int tensao = 110;
int potencia;


void setup() {
  pinMode(pinSCT, OUTPUT);
  SCT013.current(pinSCT, 0);
 lcd.init();
 lcd.backlight();
 lcd.setCursor(0, 0);
 lcd.print("ENG. DA COMPUT..");
}
 
void loop() {

lcd.clear();
 lcd.setCursor(0, 0);
 lcd.print("Ligar Led");
  digitalWrite(pinSCT, HIGH);
 delay(2000);
 lcd.clear();
 lcd.setCursor(0, 0);
 lcd.print("Desligar Led");
  digitalWrite(pinSCT, LOW);
 delay(2000);
  

}