class MemosController < ApplicationController
  def index
    render json: Memo.all
  end

  def show
    render json: Memo.find(params[:id])
  end

  def create
    Memo.new(name: params[:name], description: params[:description]).save
  end

  def update
    memo = Memo.find(params[:id])
    memo.update(name: params[:name], description: params[:description])
  end

  def destroy
    memo = Memo.find(params[:id])
    memo.destroy
  end
end
