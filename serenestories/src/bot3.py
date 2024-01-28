import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.messages = True
intents.guilds = True

bot = commands.Bot(command_prefix='/', intents = discord.Intents.all())

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name} ({bot.user.id})')
    print('------')

@bot.command(name='challenge')
async def challenge(ctx):
    # Handle /challenge command
    # Replace 'YOUR_CHALLENGE_LINK' with the actual link
    challenge_link = 'https://haabdullah.github.io/SereneStories/'
    await ctx.send(f'Congratulations on your first step towards better mental health! Here is the link to the challenge: {challenge_link}')

@bot.command(name='challengecompleted', help='Congratulate the user for completing the challenge and post their description (optional).')
async def challenge_completed(ctx, *, description=None):
    # Handle /challengecompleted command
    target_channel_id = 1201026314895888434
    target_channel = bot.get_channel(target_channel_id)

    # Check if there are attachments (images) in the message
    if ctx.message.attachments:
        image_url = ctx.message.attachments[0].url
        if description:
            description += f'\nImage: {image_url}'
        else:
            description = f'Image: {image_url}'

    # Congratulate the user and post their description in the target channel
    if description:
        await target_channel.send(f'User {ctx.author.name}#{ctx.author.discriminator} completed the challenge!\nDescription: {description}')
    else:
        await target_channel.send(f'User {ctx.author.name}#{ctx.author.discriminator} completed the challenge!')

 

# Add your bot token
bot.run('MTIwMTAyOTUzNjE1MDcyODczNA.Goc9pT.DLVdl_6wf1NU4VoTktB9r8n3u7ysbcCJgKEKiE')