require 'rubygems'
require 'rake'
require 'fileutils'

desc "Draft a new post"
task :new do
  puts "What should we call this post for now?"
  name = STDIN.gets.chomp
  
  # create filename
  filename = Time.now.strftime("%Y-%m-%d") + "-" + name.downcase.gsub(/\s/,"-")
  filename = "drafts/#{filename}.md"
  
  if File.exists? filename
    puts "File aready exists: #{filename}. Exiting."
    exit
  end
  
  FileUtils.touch(filename)

  # enter layout heading
  open(filename, 'a') do |f|
    f.puts "---"
    f.puts "layout: post"
    f.puts "title: \"DRAFT: #{name}\""
    f.puts "categories: []"
    f.puts "---"
  end
end

desc "Startup Jekyll"
task :start do
  sh "jekyll --server --auto"
end

task :default => :start
