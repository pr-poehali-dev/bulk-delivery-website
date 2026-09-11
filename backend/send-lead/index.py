import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    """Принимает заявку с формы сайта и отправляет уведомление в Telegram.
    Args: event с httpMethod, body (name, phone, message)
    Returns: HTTP-ответ с результатом отправки
    """
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    headers = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Метод не поддерживается'})
        }

    raw_body = event.get('body') or '{}'
    body_data = json.loads(raw_body)
    name = body_data.get('name', '').strip()
    phone = body_data.get('phone', '').strip()
    message = body_data.get('message', '').strip()
    source = body_data.get('source', 'Сайт').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Укажите имя и телефон'})
        }

    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')

    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': 'Telegram не настроен'})
        }

    text_lines = [
        '🔔 *Новая заявка с сайта*',
        '',
        f'👤 Имя: {name}',
        f'📞 Телефон: {phone}',
    ]
    if message:
        text_lines.append(f'💬 Сообщение: {message}')
    text_lines.append(f'📍 Источник: {source}')

    text = '\n'.join(text_lines)

    tg_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    payload = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown'
    }).encode()

    req = urllib.request.Request(tg_url, data=payload, method='POST')

    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            resp.read()
    except Exception as e:
        return {
            'statusCode': 502,
            'headers': headers,
            'body': json.dumps({'error': f'Не удалось отправить в Telegram: {str(e)}'})
        }

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True})
    }