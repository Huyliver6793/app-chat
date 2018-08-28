class RoomController < ApplicationController
  def index
    @chat_rooms = ChatRoom.all
    render json: { data: @chat_rooms}
  end

  def show
    @chat_room = ChatRoom.includes(:messages).find_by(id: params[:id])
    @messages = @chat_room.messages
    render json: { data: @messages}
  end

  def new
    @chat_room = ChatRoom.new
  end

  def create
    current_user = User.first
    if @chat_room.save
      render json: { data: @chat_room, status: :created, location: @chat_room }
    else
      render json: { data: @chat_room, status: :unprocessable_entity }
    end
  end

  private

  def chat_room_params
    params.require(:chat_room).permit(:title)
  end
end
