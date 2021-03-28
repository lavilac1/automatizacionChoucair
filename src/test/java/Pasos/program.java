package Pasos;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;


public class program {


    public static void main(String args[]) {
        WebDriver webDriver;
        String baseUrl = "https://www.choucairtesting.com/empleos-testing/";

        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        webDriver = new ChromeDriver();
        webDriver.manage().window().maximize();

        webDriver.get(baseUrl);


        Actions actions = new Actions(webDriver);
        WebElement googleTextBox = webDriver.findElement(By.id("search_keywords"));
        actions.moveToElement(googleTextBox).pause(4000).click().sendKeys(googleTextBox, "hola").build().perform();
    }

}

