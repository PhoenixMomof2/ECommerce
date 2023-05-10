class ItemsController < ApplicationController
    skip_before_action :authorize, only: :index

    # 1:1 may need to render current_user.items to shopping cart
    def index
        if current_user
            render json: current_user.items
        else
            render json: Item.all
        end
    end

    def show
        find_item
        render json: @item, status: :ok

    end
   private

   def find_item
    byebug
    @item = Item.find_by(:id params[:id])
   end
 
end
