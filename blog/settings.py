"""
Django settings for blog project.
Generated by 'django-admin startproject' using Django 4.0.2.
For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/
For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""

from pathlib import Path
import os
import django_heroku
import dj_database_url
from decouple import config




# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
#SECRET_KEY = os.environ['SECRET_KEY']

SECRET_KEY = config('SECRET_KEY')


# SECURITY WARNING: don't run with debug turned on in production!


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.sites',
    'django.contrib.staticfiles',
    
    'rest_framework',
    'rest_framework.authtoken',

    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.facebook',
    'allauth.socialaccount.providers.google',

    'dj_rest_auth',
    'dj_rest_auth.registration',

    'crispy_forms',
    'crispy_bootstrap5',
    'drf_extra_fields.fields',
    'webpack_loader',
    'corsheaders',
    'django_rename_app',

    'users',
    'quizes',

    'channels',

]

AUTHENTICATION_BACKENDS = {
    'django.contrib.auth.backends.ModelBackend',

    #Allauth methods
    'allauth.account.auth_backends.AuthenticationBackend',
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = 'blog.urls'

TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
#FRONTEND_DIR = os.path.join(BASE_DIR, 'frontend')

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates'), os.path.join(BASE_DIR, 'static')], 
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.media',
                'django.template.context_processors.request'
                
            ],
        },
    },
]



WSGI_APPLICATION = 'blog.wsgi.application'
ASGI_APPLICATION = 'blog.asgi.application'


# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases


# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

LOGIN_URL = "/auth/login/"
LOGIN_REDIRECT_URL = "/"
LOGOUT_REDIRECT_URL = "/quizgame/"
ACCOUNT_LOGOUT_ON_GET = True

# Facebook configuration
#SOCIAL_AUTH_FACEBOOK_KEY = env.int('FACEBOOK_APP_ID')
#SOCIAL_AUTH_FACEBOOK_SECRET = env.str('FACEBOOK_SECRET_KEY')
#SOCIAL_AUTH_LOGIN_REDIRECT_URL = '/'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
    os.path.join(BASE_DIR, 'media'),
    os.path.join(BASE_DIR, 'assets'),
]



STATIC_URL = 'static/'
MEDIA_URL = 'media/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
MEDIA_ROOT = os.path.join(BASE_DIR, 'media_cdn')

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
#STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'users.UserModel'

SITE_ID=1

CRIPSPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"

CRISPY_TEMPLATE_PACK = "bootstrap5"

ACCOUNT_EMAIL_VERIFICATION = "none"
ACCOUNT_EMAIL_REQUIRED = (True)

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        #'rest_framework.permissions.IsAuthenticated',
    ]
}

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'dist/',
        'STATS_FILE': str(BASE_DIR.joinpath('webpack-stats.json')),
    }
}

DATABASES = { 'default': dj_database_url.config(default=config('DATABASE_URL')), }



# Configure Django App for Heroku.

django_heroku.settings(locals())

SOCIALACCOUNT_PROVIDERS = {
    'google': {
        'SCOPE': [
            'profile',
            'email',
        ],
        'AUTH_PARAMS': {
            'access_type': 'online',
        }
    },
    'facebook': {
        'METHOD': 'oauth2',
        #'SDK_URL': '//connect.facebook.net/{locale}/sdk.js',
        'SCOPE': ['email', 'public_profile'],
        'AUTH_PARAMS': {'auth_type': 'reauthenticate'},
        'INIT_PARAMS': {'cookie': True},
        'FIELDS': [
            'id',
            'first_name',
            'last_name',
            'middle_name',
            'name',
            'name_format',
            'picture',
            'short_name'
        ],
        'EXCHANGE_TOKEN': True,
        #'LOCALE_FUNC': 'path.to.callable',
        'VERIFIED_EMAIL': False,
        'VERSION': 'v7.0',
    }
}


#CHANNEL_LAYERS = {
##    "default": {
 #       "BACKEND": "channels.layers.InMemoryChannelLayer",
 #   },
#}
  
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [("redis://:p7048c4c40f2bd0182bed4a2502f6302e2aa47c97830148e52ae8cf66035bf337@ec2-54-155-14-129.eu-west-1.compute.amazonaws.com", 14670), 'redis://localhost:6379'],
            "symmetric_encryption_keys": [SECRET_KEY],
        },
    },
}
    

# 640270073725159

# 48142ffc3617b1a71de8e10edffa2037

DEBUG = config('DEBUG', default=True, cast=bool)
#Dev :
#ACCOUNT_DEFAULT_HTTP_PROTOCOL = "http"; DEFAULT_HTTP_PROTOCOL = "http"; SESSION_COOKIE_SECURE = False; CSRF_COOKIE_SECURE = False; SECURE_SSL_REDIRECT = False; DEBUG = True; ALLOWED_HOSTS = ['10.10.10.23', 'www.quizcity.net', 'localhost'] 
#Prod
ACCOUNT_DEFAULT_HTTP_PROTOCOL = "https"; DEFAULT_HTTP_PROTOCOL = "https"; SESSION_COOKIE_SECURE = True ; CSRF_COOKIE_SECURE = True ; os.environ['HTTPS'] = "on"; SECURE_HSTS_SECONDS = 31536000; SECURE_HSTS_PRELOAD = True; SECURE_HSTS_INCLUDE_SUBDOMAINS = True; DEBUG = True; ALLOWED_HOSTS = ['quizcity2.herokuapp.com', 'www.quizcity.net', '10.10.10.23:8002']; SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https"); CORS_ALLOW_CREDENTIALS = True; PREPEND_WWW = True; BASE_URL = "https://www.quizcity.net"; CORS_ORIGIN_ALLOW_ALL = True; CSRF_TRUSTED_ORIGINS = ['https://www.quizcity.net', 'http://10.10.10.23:8002']; CORS_ORIGIN_WHITELIST = ('https://www.quizcity.net', 'http://10.10.10.23:8002', 'wss://www.quizcity.net'); DEBUG_PROPAGATE_EXCEPTIONS = True; WHITENOISE_USE_FINDERS = True; WHITENOISE_MANIFEST_STRICT = False; WHITENOISE_ALLOW_ALL_ORIGINS = True

#CORS_REPLACE_HTTPS_REFERER = False
#SECURE_SSL_REDIRECT = True
#DEBUG_PROPAGATE_EXCEPTIONS = True

#WHITENOISE_USE_FINDERS = True
#WHITENOISE_MANIFEST_STRICT = False
#WHITENOISE_ALLOW_ALL_ORIGINS = True



