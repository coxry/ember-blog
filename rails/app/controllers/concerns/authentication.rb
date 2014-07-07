module Authentication

  @tokens = []

  def self.createToken
    token = SecureRandom.hex
    @tokens << token
    return token
  end

  def self.validToken?(access_token)
    @tokens.include?(access_token)
  end

  def self.invalidateToken(access_token)
    @tokens.delete(access_token)
  end

end
