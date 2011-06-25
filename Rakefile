require 'rubygems'
require 'rake'
require 'fileutils'

desc "Draft a new post"
task :new do
  puts "What should we call this post for now?"
  name = STDIN.gets.chomp
  
  # create filename
  filename = name.downcase.gsub(/\s/,"-")
  FileUtils.touch("drafts/#{filename}.md")

  # enter layout heading
  open("drafts/#{name}.md", 'a') do |f|
    f.puts "---"
    f.puts "layout: post"
    f.puts "title: \"DRAFT: #{name}\""
    f.puts "categories: []"
    f.puts "---"
  end
end

desc "Startup Jekyll"
task :start do
  sh "jekyll --server"
end

task :default => :start
