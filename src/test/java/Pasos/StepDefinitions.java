package Pasos;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.interactions.Actions;



public class StepDefinitions {

    private WebDriver webDriver;
    private String baseUrl = "https://www.choucairtesting.com/empleos-testing/";

    @Before
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        webDriver = new ChromeDriver();
        webDriver.manage().window().maximize();
    }

    @Given("Open choucair.com")
    public void open_choucair_com() {
        webDriver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        webDriver.get(baseUrl);
    }

    @When("Entering texto ")
    public void entering_texto(String keyswords) {

    WebElement googleTextBox = webDriver.findElement(By.id("search_keywords"));
    googleTextBox.sendKeys(keyswords );
    webDriver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    @When("Press enter")
    public void press_enter() {
        WebElement searchButton = webDriver.findElement(By.className("gNO89b"));
        searchButton.click();
    }

    @Then("Result should be {int}")
    public void result_should_be(Integer result) {
        WebElement calculatorTextBox = webDriver.findElement(By.className("qv3Wpe"));
        Integer getResult = Integer.parseInt(calculatorTextBox.getText());
        Assert.assertEquals(getResult, result);
        webDriver.close();
    }

    @After
    public void end() {
        if (webDriver != null) {
            webDriver.quit();
        }
    }

}