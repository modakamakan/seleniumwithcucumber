package ru;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(features="feature//demo_3.feature" ,glue={"stepDef"},plugin={"html:target/re.html"})
public class rnc1 {

}
