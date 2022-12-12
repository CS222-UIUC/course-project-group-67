# import python-netflix

n = NetflixAPI(api_key='*your app key*',
                api_secret='*your app secret*',
                callback_url='http://www.example.com/callback/')

auth_props = n.get_authentication_tokens()
auth_url = auth_props['auth_url']

#Store this token in a session or something for later use in the next step.
oauth_token_secret = auth_props['oauth_token_secret']

print('Connect with Netflix via %s' % auth_url)

#  oauth_token = request.GET.get('oauth_verifier')
#  oauth_verifier = request.GET.get('oauth_verifier')

# #Initiate the NetflixAPI class in your callback.
# n = NetflixAPI(api_key='*your app key*',
#                api_secret='*your app secret*',
#                oauth_token=oauth_token,
#                oauth_token_secret=session['netflix_session_keys'][  'oauth_token_secret'])

# authorized_tokens = n.get_auth_tokens(oauth_verifier)

# final_oauth_token = authorized_tokens['oauth_token']
# final_oauth_token_secret = authorized_tokens['oauth_token_secret']
# final_user_id = authorized_tokens['user_id']

