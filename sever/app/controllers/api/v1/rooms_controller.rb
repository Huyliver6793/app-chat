class Api::V1::RoomsController < Api::V1::BaseController

  def index
    @chat_rooms = ChatRoom.all
    render json: { data: @chat_rooms}
  end
end
