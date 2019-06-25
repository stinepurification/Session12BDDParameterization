Feature: Login 
	As a user I want a login page in order to validate authentic user access.

Scenario: User can login with proper credentials 
	Given user is already on Login Page 
	When title of the login page is TechFios 
	Then user enters username and password 
	Then user click on login button 
	And Dashboard Page will display 
	
Scenario: User can login with proper credentials - parameterized 
	Given user is already on Login Page 
	When title of the login page is TechFios 
	Then user enters "techfiosdemo@gmail.com" and "abc123" 
	Then user click on login button 
	And Dashboard Page will display 
	
Scenario Outline: User can login with proper credentials - using a table
	Given user is already on Login Page 
	When title of the login page is TechFios 
	Then user enters "<email>" and "<password>" 
	Then user click on login button 
	And Dashboard Page will display 
	Examples: 
		|email					|password|
		|techfiosdemo@gmail.com	|abc123  |
		|Stine@gmail.com 	    |admin   |
		
		
		
		
	