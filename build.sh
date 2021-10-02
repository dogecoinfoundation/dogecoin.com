#!/bin/bash
# List all markdown files
CONTENT_FILES=$(find content -name "*.md")

# Lists all master translation (english) files.
MASTER_FILES=$(echo "$CONTENT_FILES" | awk -F '.' '{if($2 == "md") {print $0}}')

# Lists all the locales
LOCALES=$(echo "$CONTENT_FILES" | awk -F '.' '{if($2 != "md") {print $2}}' | sort -u)

# Symlinks created are kept into this array to be removed after the build process
SYM_LINKS=()

# Iterates on all the master files, then iterates on all the locales to check if
# the master file has a counterpart for that locale. If not we create a symlink.
for MASTER_FILE in $MASTER_FILES
do
  for LOCALE in $LOCALES
  do
    LOCALE_VARIANT=$(echo $MASTER_FILE | sed "s/.md/.$LOCALE.md/")
    if [ ! -f $LOCALE_VARIANT ]; then
      ln ${MASTER_FILE} ${LOCALE_VARIANT}
      SYM_LINKS+=($LOCALE_VARIANT)
    fi
  done
done

# Run hugo's build command
hugo --minify

# Remove the symlinks we created useful to avoid poluting the repo when running
# the command locally
for SYM_LINK in ${SYM_LINKS[@]}; do
  rm $SYM_LINK
done
