#!/usr/bin/env python
from setuptools import setup, find_packages

setup(name='blog',
      version='1.0',
      packages=find_packages(),
      scripts=["manage.py"],
      author="Enigma Alighieri",
      author_email="papadi166@gmail.com",
      classifiers= [
        'Development Status :: 3 - Alpha',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Programming Language :: Python :: 3.10.1',
      ]
      ),