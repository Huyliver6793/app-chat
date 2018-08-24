class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(*args, message)
    # Action cable sẽ broadcast notification số lượng thông báo và nội dung thông báo
    ActionCable.server.broadcast("chat_rooms_#{message.chat_room_id}", {body: message.body, sender: message.sender})
  end
end
