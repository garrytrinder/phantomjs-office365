# IMPORTANT 
Phantom JS is now longer being actively supported, whilst Google have since created a headless version of Chrome for Windows and Linux which is more enduring technology. 

Check out the [Headless Chrome Office 365](https://github.com/johnnliu/headless-chrome-o365) solution from John Liu (MVP) whos intial idea started me down this whole path with Phantom JS.

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
