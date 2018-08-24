class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
      stream_from "chat_rooms_#{params['room']}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send_message(data)
    current_user = User.first
    current_user.messages.create!(body: data['body'], sender: data['sender'], chat_room_id: params['room'])
  end

end
