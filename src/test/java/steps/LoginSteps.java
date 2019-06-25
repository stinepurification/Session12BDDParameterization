package steps;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	WebDriver driver;

	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() {
		System.setProperty("webdriver.chrome.driver", ".\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.get("http://techfios.com/test/billing/?ng=login/");
	}

	@When("^title of the login page is TechFios$")
	public void title_of_the_login_page_is_TechFios() {
		String ExpectedTitle = "Login - TechFios Test Application - Billing";
		String displayedTitle = driver.getTitle();
		assertEquals("Titles did not match!", ExpectedTitle, displayedTitle);
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() {
		driver.findElement(By.id("username")).sendKeys("techfiosdemo@gmail.com");
		driver.findElement(By.id("password")).sendKeys("abc123");
	}
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password ) throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.id("username")).sendKeys(username);
		Thread.sleep(2000);
		driver.findElement(By.id("password")).sendKeys(password);
	}

	@Then("^user click on login button$")
	public void user_click_on_login_button() throws InterruptedException {
		driver.findElement(By.name("login")).click();
		Thread.sleep(3000);
	}

	@Then("^Dashboard Page will display$")
	public void dashboard_Page_will_display() {
		String expectedTitle = "Dashboard- TechFios Test Application - Billing";
		String actualTitle = driver.getTitle();
		assertEquals("Titles did not match!", expectedTitle, actualTitle);
		driver.close();
		driver.quit();
	}
}