# How To Run Dogecoin Preview Website

- [How To Run Dogecoin Preview Website](#how-to-run-dogecoin-website)
  - [Install Hugo](#install-hugo)
    - [Install on Windows](#install-on-windows)
      - [Set up Your Directories](#set-up-your-directories)
      - [Get Hugo](#get-hugo)
      - [Add Hugo to Windows PATH](#add-hugo-to-windows-path)
      - [Verify the Executable](#verify-the-executable)
    - [Install on Mac](#install-on-mac)
      - [Homebrew](#homebrew)
      - [MacPorts](#macports)
    - [Install on Linux](#install-on-linux)
      - [Ubuntu and Debian](#ubuntu-and-debian)
      - [Fedora, Red Hat and CentOS](#fedora-red-hat-and-centos)
      - [Snap Package](#snap-package)
  - [Run Website](#run-website)

## Install Hugo

### Install on Windows

#### Set up Your Directories 

You’ll need a place to store the Hugo executable:

* Open Windows Explorer.
* Create a new folder: ```C:\Hugo```, assuming you want Hugo on your C drive, although this can go anywhere.
* Create a subfolder in the Hugo folder: ```C:\Hugo\bin```.

#### Get Hugo

* Go to the Hugo Releases page: [https://github.com/gohugoio/hugo/releases](https://github.com/gohugoio/hugo/releases).
* The latest release is announced on top. Scroll to the bottom of the release announcement to see the downloads. They’re all ZIP files.
* Find the Windows files near the bottom (they’re in alphabetical order, so Windows is last) – download either the 32-bit or 64-bit file depending on whether you have 32-bit or 64-bit Windows. 
* Move the ZIP file into your ```C:\Hugo\bin``` folder.
* Double-click on the ZIP file and extract its contents. Be sure to extract the contents into the same ```C:\Hugo\bin``` folder – Windows will do this by default unless you tell it to extract somewhere else.

#### Add Hugo to Windows PATH

* Right click on the **Start** button.
* Click on **System**.
* Click on **Advanced System Settings** on the left.
* Click on the **Environment Variables…** button on the bottom.
* In the User variables section, find the row that starts with PATH (PATH will be all caps).
* Double-click on **PATH**.
* Click the **New…** button.
* Type in the folder where hugo.exe was extracted, which is ```C:\Hugo\bin``` if you went by the instructions above. The PATH entry should be the folder where Hugo lives and not the binary. Press Enter when you’re done typing.
* Click OK at every window to exit.

#### Verify the Executable

* Open a Command Prompt 
* Type ```hugo help``` and press the Enter key. You should see output like this:
```
hugo is the main command, used to build your Hugo site.

Hugo is a Fast and Flexible Static Site Generator
built with love by spf13 and friends in Go.

Complete documentation is available at https://gohugo.io/.
```

### Install on Mac

#### Homebrew

* Install Homebrew
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
``` 
* Install Hugo
```
brew install hugo
```
* Verify Installation
```
$ # show the location of the hugo executable
which hugo
/usr/local/bin/hugo

# show the installed version
ls -l $( which hugo )
lrwxr-xr-x  1 dogecoin admin /usr/local/bin/hugo -> ../Cellar/hugo/0.13_1/bin/hugo

# verify that hugo runs correctly
hugo version
Hugo Static Site Generator v0.13
```

#### MacPorts

```
port install hugo
```

### Install on Linux 

#### Ubuntu and Debian

```
sudo apt-get install hugo
```

#### Fedora, Red Hat and CentOS

```
sudo dnf install hugo
```

#### Snap Package

* To install the “extended” Sass/SCSS version.
```
snap install hugo --channel=extended
```
* To install the non-extended version without Sass/SCSS.
```
snap install hugo
```

## Run Website

* Open a Terminal.
* Go to the root folder of ```dogecoin.com``` which you just get from the step '[How To Get Dogecoin Preview Website](how-to-get-website.md)'.
* Run the command as below:
```
hugo serve -D
```
* Navigate to your new site at http://localhost:1313/.
* Have fun.