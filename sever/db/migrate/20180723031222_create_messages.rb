class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :body
      t.string :sender
      t.references :user
      t.references :chat_room

      t.timestamps
    end
  end
end
