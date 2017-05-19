# Phantom JS Office 365

A PhantomJS script that authenticates with Office 365 and navigates to a SharePoint page, generates a local PDF of the page.

## Setup

Install [PhantomJS](http://phantomjs.org/) and add to PATH

Create auth.js file in root folder, as below

    var username = '<username>@<tenant>.onmicrosoft.com';
    var password = '<password>';

    module.exports = {
        username: username,
        password: password
    }

## Usage

    phantomjs ./src/main.js 'https://<tenant>.sharepoint.com/SitePages/Home.aspx' '<filename>.pdf'