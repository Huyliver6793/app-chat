#đây là thư mực app của bạn
root = "/home/deploy/app-chat/sever"
working_directory root
#pid của unicorn khi chạy
pid "#{root}/tmp/pids/unicorn.pid"
#log
stderr_path "#{root}/log/unicorn.error.log"
stdout_path "#{root}/log/unicorn.access.log"

#chạy với sock
listen "#{root}/shared/sockets/unicorn.sock"
preload_app true

# Garbage collection settings.
GC.respond_to?(:copy_on_write_friendly=) &&
  GC.copy_on_write_friendly = true

# If using ActiveRecord, disconnect (from the database) before forking.
before_fork do |server, worker|
  defined?(ActiveRecord::Base) &&
    ActiveRecord::Base.connection.disconnect!
end

# After forking, restore your ActiveRecord connection.
after_fork do |server, worker|
  defined?(ActiveRecord::Base) &&
    ActiveRecord::Base.establish_connection
end

worker_processes 2
timeout 30
