Feature: New Account 
	As a user I want a New Account page in order to create accounts.

Scenario Outline: User would be able to add new account 
	Given a user already logged-in as "<username>" and "<password>" 
	When user navigates to Bank Cash -> New Accunt 
	Then new accounts page should display 
	When user submits "<title>" and "<description>" and "<balance>" 
	Then Account Created Successfully message should display 
	Examples: 
		|title	|description|balance|username				|password|
		|John99 |Golf    	| 1000  |techfiosdemo@gmail.com	|abc123  |
#		|Mike99 |Tennis    	| 2000  |techfiosdemo@gmail.com |abc123  |