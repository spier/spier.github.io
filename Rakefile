require 'rubygems'
require 'rake'
require 'fileutils'


desc "Draft a new post"
task :new do
  puts "What should we call this post for now?"
  name = STDIN.gets.chomp

  # create filename
  filename = Time.now.strftime("%Y-%m-%d") + "-" + name.downcase.gsub(/\s/,"-")
  filename = "_drafts/#{filename}.md"

  if File.exists? filename
    puts "File aready exists: #{filename}. Exiting."
    exit
  end

  FileUtils.touch(filename)

  # enter layout heading
  open(filename, 'a') do |f|
    f.puts "---"
    f.puts "layout: post"
    f.puts "title: \"#{name}\""
    f.puts "categories: []"
    f.puts "---"
  end
end


desc "Startup Jekyll in local mode"
task :start do
  sh "jekyll serve --watch --trace --config _config.yml,_config-dev.yml"
end


desc "Startup Jekyll in production mode"
task :start_prod do
  sh "jekyll serve"
end


task :default => :start
