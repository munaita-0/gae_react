class MemosController < ApplicationController
  def index
    if Memo.all.blank?
      Memo.new(name: 'first', description: 'first_desc').save
    end
    render json: {aa: Memo.all}
  end
end
