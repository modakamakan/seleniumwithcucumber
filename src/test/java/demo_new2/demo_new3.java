package demo_new2;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="feature\\Tagdemo.feature",glue={"stepDef"},plugin={"html:target/re.html"},tags={"@SmokeTest","@RegressionTest"})
public class demo_new3 {

}
