package stepDef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class testmeapp_login {
	WebDriver driver=null;
	
	@Given("^the login page is opened$")
	public void the_login_page_is_opened() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6b.01.16\\Desktop\\browser and drivers\\chromedriver_win32\\chromedriver.exe");
        driver=new ChromeDriver();
        driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
	    driver.manage().window().maximize();
	    driver.findElement(By.linkText("SignIn")).click();
	    System.out.println("title of home: "+driver.getTitle());
	   
	}

	@When("^user enters lalitha as username$")
	public void user_enters_lalitha_as_username()   {
		driver.findElement(By.id("userName")).sendKeys("lalitha");
		
	    
	}

	@When("^password as password(\\d+)$")
	public void password_as_password(int arg1){
		driver.findElement(By.name("password")).sendKeys("password123"); 
		
	}

	@Then("^user will find testmeapp homepage$")
	public void user_will_find_testmeapp_homepage() {
		driver.findElement(By.xpath("//input[@value='Login']")).click();
		System.out.println("title:"+driver.getTitle());
	}



}
