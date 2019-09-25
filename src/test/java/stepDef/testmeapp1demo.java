package stepDef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class testmeapp1demo {

	WebDriver driver=null;
	@Given("^user is open the application$")
	public void user_is_open_the_application() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6b.01.16\\Desktop\\browser and drivers\\chromedriver_win32\\chromedriver.exe");
        driver=new ChromeDriver();
        driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
	    driver.manage().window().maximize();
	}

	@When("^user click on sign in link$")
	public void user_click_on_sign_in_link(){
		driver.findElement(By.linkText("SignIn")).click();
	    System.out.println("title of home: "+driver.getTitle());
	   
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password)  {
		driver.findElement(By.id("userName")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password); 
		driver.findElement(By.xpath("//input[@value='Login']")).click();
	}

	@Then("^mesage displayed login successfully$")
	public void mesage_displayed_login_successfully()  {
		 System.out.println("login success ");
	  
	}

}
