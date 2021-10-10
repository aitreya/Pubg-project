from fastapi import FastAPI

app = FastAPI()


@app.get("/getTimings")
async def root():
    return {"message": "Hello World"}


@app.get("/menu")
async def menu():
    a = [
        {
            'title': "Home",
            'link': "/"
        },
        {
            'title': "About",
            'link': "/about"
        },
    ]
    return a
