from pathlib import Path
js_path = Path('script.js')
text = js_path.read_text(encoding='utf-8')
place_map = {
    1: {'ac': True, 'area': 'Indoor', 'longStudy': 'true'},
    2: {'ac': False, 'area': 'Indoor', 'longStudy': 'true'},
    3: {'ac': True, 'area': 'Indoor & Outdoor', 'longStudy': 'false'},
    4: {'ac': True, 'area': 'Indoor', 'longStudy': 'true'},
    5: {'ac': False, 'area': 'Indoor', 'longStudy': 'false'},
    6: {'ac': False, 'area': 'Outdoor', 'longStudy': 'true'},
    7: {'ac': True, 'area': 'Indoor', 'longStudy': 'true'},
    8: {'ac': True, 'area': 'Indoor', 'longStudy': 'true'},
    9: {'ac': True, 'area': 'Indoor', 'longStudy': 'false'},
    10: {'ac': False, 'area': 'Outdoor', 'longStudy': 'false'},
    11: {'ac': False, 'area': 'Outdoor', 'longStudy': 'false'},
}
for pid, props in place_map.items():
    old = f"\t\tlongStudy: {props['longStudy']},\n\t\tdescription:"
    new = f"\t\tlongStudy: {props['longStudy']},\n\t\tac: {str(props['ac']).lower()},\n\t\tarea: \"{props['area']}\",\n\t\tdescription:"
    if old not in text:
        raise ValueError(f"Pattern not found for place id {pid}: {old!r}")
    text = text.replace(old, new, 1)
js_path.write_text(text, encoding='utf-8')
print('patched', len(place_map), 'places')
