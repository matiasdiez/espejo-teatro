import re
import os

files = ['index.html', 'equipo.html', 'gemini.html']

amber_config = """                        amber: {
                            50: '#fffbeb',
                            100: '#fef3c7',
                            200: '#fde68a',
                            300: '#fcd34d',
                            400: '#fbbf24',
                            500: '#f59e0b',
                            600: '#d97706',
                            700: '#b45309',
                            800: '#92400e',
                            900: '#78350f',
                            950: '#451a03',
                        }"""

burgundy_config = """                        burgundy: {
                            50: '#fbf3f4',
                            100: '#f5e3e5',
                            200: '#ebc0c5',
                            300: '#dd949d',
                            400: '#c95e6d',
                            500: '#b03348',
                            600: '#9b2439',
                            700: '#821a2c',
                            800: '#6d1827',
                            900: '#5c1724',
                            950: '#320911',
                        }"""

for file in files:
    with open(file, 'r') as f:
        content = f.read()

    # Replace the color config
    content = content.replace(amber_config, burgundy_config)

    # Replace classes
    content = content.replace('text-amber-', 'text-burgundy-')
    content = content.replace('border-amber-', 'border-burgundy-')
    content = content.replace('bg-amber-', 'bg-burgundy-')
    content = content.replace('btn-warning', 'bg-burgundy-600 hover:bg-burgundy-700 text-white border-0')
    content = content.replace('text-warning', 'text-burgundy-600 dark:text-burgundy-400')
    content = content.replace('bg-warning/10', 'bg-burgundy-500/10')
    
    with open(file, 'w') as f:
        f.write(content)

print("Theme updated")
