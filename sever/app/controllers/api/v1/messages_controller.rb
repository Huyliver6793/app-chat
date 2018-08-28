class Api::V1::MessagesController < Api::V1::BaseController

  def index
    respond_to do |format|
      format.html
      format.json do
        @messages = Message.all
        render json: { data: @messages}
      end
    end
  end

  def create
   @message = Message.new(message_params)
    respond_to do |format|
      if @message.save
        format.html { redirect_to @message, notice: 'Like was successfully created.' }
        format.json { render :show, status: :created, location: @message }
      else
        format.html { render :new }
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :sender)
  end
end
