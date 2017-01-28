# Instructions for editing, running and upkeeping DADA website

1. Make your changes through Siteleaf. Use Siteleaf preview to preview changes.
2. When you're happy with what you've got, make a Pull Request on Github from `siteleaf` branch onto `master` branch.
3. Merge the pull request.
Enjoy!

## Prerequisites:
- Have Xcode installed `xcode-select --install`
- Install Homebrew `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- Modify $PATH to use Homebrew: `export PATH=/usr/local/bin:$PATH`
- Modify $PATH for GUI apps: `launchctl setenv PATH "/usr/local/bin:$PATH"`
- Install the latest Ruby: `brew install ruby`
- Install the latest Jekyll: `gem install jekyll`
- Install Jekyll and Bundler gems through RubyGems: `gem install jekyll bundler`
- Install git if not already installed: `brew install git`

## Your first run of the project:
- In terminal navigate to a folder you want the project to be
- Clone the repository: `git clone https://github.com/dadary/dadary.github.io.git && cd $_`
- install the jekyll and bundler gems through RubyGems: `gem install jekyll bundler`
- install bundler: `bundler install`
- To view and build locally run: `bundle exec jekyll serve` [view documentation](http://jekyllrb.com/docs/quickstart/)
