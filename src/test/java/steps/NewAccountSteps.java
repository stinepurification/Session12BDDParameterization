package steps;

import static org.junit.Assert.assertEquals;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.ScreenShot;
import util.Scroll;

public class NewAccountSteps {

	WebDriver driver;
	
	@Before
	public void startBrowerAndGoToTechFios() throws Exception {
		System.setProperty("webdriver.chrome.driver", ".\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://techfios.com/test/billing/?ng=login/");
		ScreenShot.takeScreenShot(driver, "c:\\ScreenShot\\LoginPage.png");
	}

	@Given("^a user already logged-in as \"(.*)\" and \"(.*)\"$")
	public void a_user_already_logged_in(String username, String password) throws Exception {
		String ExpectedTitle = "Login - TechFios Test Application - Billing";
		String displayedTitle = driver.getTitle();
		assertEquals("Titles did not match!", ExpectedTitle, displayedTitle);
		driver.findElement(By.id("username")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
		driver.findElement(By.name("login")).click();
		String expectedTitle = "Dashboard- TechFios Test Application - Billing";
		String actualTitle = driver.getTitle();
		ScreenShot.takeScreenShot(driver, "c:\\ScreenShot\\DashboardPage.png");
		
		// Scroll Down
		Scroll.down(driver);
		Thread.sleep(3000);
		ScreenShot.takeScreenShot(driver, "c:\\ScreenShot\\PieChart.png");
		
		Scroll.up(driver);
		Thread.sleep(3000);
		
		assertEquals("Titles did not match!", expectedTitle, actualTitle);
	}

	@When("^user navigates to Bank Cash -> New Accunt$")
	public void user_navigates_to_Bank_Cash_New_Accunt() {
		driver.findElement(By.xpath("//ul[@id='side-menu']/descendant::*[text()='Bank & Cash']")).click();

		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.linkText("New Account"))));

		driver.findElement(By.linkText("New Account")).click();
	}

	@Then("^new accounts page should display$")
	public void new_accounts_page_should_display() {
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//h2[text()='Accounts ']"))));
	}

	@When("^user submits \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_submits_Account_Title_Description_and_Initial_Balance(String accountTitle, String description,
			String initialBalance) {
		driver.findElement(By.id("account")).sendKeys(accountTitle);
		driver.findElement(By.id("description")).sendKeys(description);
		driver.findElement(By.id("balance")).sendKeys(initialBalance);
		driver.findElement(By.xpath("//label[text()='Initial Balance']/../following-sibling::button")).click();
	}

	@Then("^Account Created Successfully message should display$")
	public void account_Created_Successfully_message_should_display() {

	}

	@After
	public void closeBrowser() {
		driver.close();
		driver.quit();
	}
}