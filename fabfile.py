import os

from fabric import Connection, task
from dotenv import load_dotenv, find_dotenv

if not find_dotenv():
    exit("Переменные окружения не загружены, т.к отсутствует файл .env")
else:
    load_dotenv()


HOST: str = os.getenv("HOST")
PORT: str = os.getenv("PORT")
SERVER_USER: str = os.getenv("SERVER_USER")
KEY: str = os.getenv("KEY")


@task
def deploy(ctx):
    with Connection(
            host=HOST,
            user=SERVER_USER,
            port=int(PORT),
            connect_kwargs={"key_filename": KEY},
    ) as c:
        c.local("rm -f arh.tar")
        c.local("tar --exclude='.env' --exclude='fabfile.py' --exclude='venv' --exclude='.idea' -cf arh.tar *")
        with c.cd("/home/user_igor/other_calculators"):
            c.put("arh.tar", "/home/user_igor/other_calculators")
            c.run("tar -xf arh.tar")
            c.run("docker-compose down")
            c.run("docker-compose up --build -d")
            c.run("rm arh.tar")