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
import org.openqa.selenium.Keys;



public class StepDefinitions {

    private WebDriver webDriver;
    private String baseUrl = "https://www.choucairtesting.com/empleos-testing/";


    @Before
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        webDriver = new ChromeDriver();
        webDriver.manage().window().maximize();

    }

    @Given("Abrir choucair.com")
    public void open_choucair_com() {
        webDriver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        webDriver.get(baseUrl);
    }

    @When("Ingresar texto {}")
    public void entering_texto(String texto) {

    WebElement keywordTextBox = webDriver.findElement(By.id("search_keywords"));
        keywordTextBox.sendKeys(texto);
        WebElement locationTextBox = webDriver.findElement(By.id("search_location"));
        locationTextBox.sendKeys(texto);
    webDriver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }


    @When("Presionar search jobs")
    public void press_enter() {
        WebElement searchButton = webDriver.findElement(By.className("search_submit"));
        searchButton.click();
    }

   @Then("El resultado debe ser {}")
    public void result_should_be(String resultado) {
        WebElement lblresult = webDriver.findElement(By.className("no_job_listings_found"));
        String getResult = lblresult.getText();
        Assert.assertEquals(getResult, resultado);
        webDriver.close();
    }

    @Given("Abrir pagina choucair.com")
    public void abrir_pag_choucair_com() {
        webDriver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        webDriver.get(baseUrl);
    }

    @When("Buscar {}")
    public void buscar_oferta(String oferta) {
        WebElement keywordTextBox = webDriver.findElement(By.id("search_keywords"));
        keywordTextBox.sendKeys(oferta);

    }

    @When("Seleccionar oferta")
    public void dar_clic() {

        WebElement searchButton = webDriver.findElement(By.className("search_submit"));
        searchButton.click();
        WebElement lbllink = webDriver.findElement(By.xpath("//h3[contains(.,'Analista de Pruebas Lima')]"));
        lbllink.click();
    }
    @When("Clic en Aplicar")
    public void dar_clic_aplicar() {
        webDriver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        WebElement aplicarButton = webDriver.findElement(By.className("application_button"));
        aplicarButton.click();

    }


    @When("Ingresar nombre {}")
    public void llenar_formulario(String texto) {
        WebElement nombreTextBox = webDriver.findElement(By.id("nombre-completo"));
        nombreTextBox.sendKeys(texto);

    }

    @When("Ingresar correo {}")
    public void llenar_formulario_correo(String correo) {

        WebElement correoTextBox = webDriver.findElement(By.id("correo-electronico"));
        correoTextBox.sendKeys(correo);

    }
    @When("Ingresar celular {}")
    public void llenar_formulario_celular(String celular) {

        WebElement celularTextBox = webDriver.findElement(By.id("celular-o-telefono-de-contacto"));
        celularTextBox.sendKeys(celular);

    }
    @When("Ingresar estudios {}")
    public void llenar_formulario_estudios(String estudios) {

        WebElement txt_estudios = webDriver.findElement(By.id("que-estudios-formales-tienes-o-en-que-semestre-te-encuentras-actualmente"));
        txt_estudios.sendKeys(estudios);

    }
    @When("Ingresar tiempo {}")
    public void llenar_formulario_tiempo(String tiempo) {

        WebElement tiempoTextBox = webDriver.findElement(By.id("que-tiempo-de-experiencia-certificada-tienes-en-pruebas-o-en-desarrollo-de-softwaresi-aplica"));
        tiempoTextBox.sendKeys(tiempo);

    }
    @When("Ingresar conocimiento {}")
    public void llenar_formulario_conocimiento(String conocimiento) {

        WebElement conocimientoTextBox = webDriver.findElement(By.id("conoces-de-automatizacion-de-pruebas-te-gustaria-aprendersi-aplica"));
        conocimientoTextBox.sendKeys(conocimiento);

    }
    @When("Ingresar aspiracion {}")
    public void llenar_formulario_aspiracion(String aspiracion) {

        WebElement aspiracionTextBox = webDriver.findElement(By.id("cual-es-tu-aspiracion-salarial"));
        aspiracionTextBox.sendKeys(aspiracion);

    }

    @When("Ingresar disponibilidad {}")
    public void llenar_formulario_disponibilidad(String disponibilidad) {

        WebElement disponibilidadTextBox = webDriver.findElement(By.id("si-eres-seleccionado-que-disponibilidad-de-tiempo-para-ingresar-tendrias"));
        disponibilidadTextBox.sendKeys(disponibilidad);

    }
    @When("Ingresar mensaje {}")
    public void llenar_formulario_mensaje(String mensaje) {

        WebElement mensajeTextBox = webDriver.findElement(By.id("mensaje-adicional"));
        mensajeTextBox.sendKeys(mensaje);

    }

    @When("clic en enviar aplicacion")
    public void dar_clic_enviar() {
        WebElement mensajeTextBox = webDriver.findElement(By.id("mensaje-adicional"));
        mensajeTextBox.sendKeys(Keys.ENTER);

    }



    @After
    public void end() {
        if (webDriver != null) {
            webDriver.quit();
        }
    }

}