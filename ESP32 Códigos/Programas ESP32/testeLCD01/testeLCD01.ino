#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include "EmonLib.h"


EnergyMonitor SCT013;
LiquidCrystal_I2C lcd(0x27, 16, 2);

int pinSCT = 15;
int tensao = 110;
int potencia;


void setup() {
  SCT013.current(pinSCT, 0.007134121);
 lcd.init();
 lcd.backlight();
 lcd.setCursor(3, 0);
 lcd.print("");
 lcd.setCursor(0, 1);
 lcd.print("ENG. DA COMPUT..");
}
 
void loop() {

double Irms = SCT013.calcIrms(4096);
 lcd.setCursor(0, 0);
 lcd.print(Irms);
 delay(2000);
 lcd.setCursor(0, 1);
 lcd.print("calculando");
 delay(1000);
 lcd.setCursor(0, 1);
 lcd.print("                     ");
  lcd.setCursor(14, 0);
  lcd.print("A");
}