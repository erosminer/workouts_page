#!/usr/bin/bash
## Just Keep Runing 项目 README
source $HOME/miniconda3/bin/activate base

#获取咕咚的gpx数据
#python3 scripts/codoon_sync.py --with-gpx 15810800280 ghZJsny_0810
# 只能单端登录

#获取行者的gpx数据
#python3 run_page/xingzhe_sync.py --with-gpx 15810800280 ghZJsny_1997
#依赖库有问题

#获取高驰的数据
python3 run_page/coros_sync.py erosminer@qq.com ghZJsny_1997

#更新运动数据文件
python3 run_page/update_activities_file.py

#生成网页静态图片
# python scripts/gen_svg.py \
#  --from-db \
#  --title cau_jkr \
#  --type grid \
#  --athlete xiaoming 
#  --output assets/grid.svg \
#  --min-distance 1.0 
#  --special-color yellow \
#  --special-color2 red \
#  --special-distance 5 \
#  --special-distance2 10 \
#  --use-localtime
# python scripts/gen_svg.py \
#  --from-db 
#  --title cau_jkr \
#  --type github \
#  --athlete erospi \
#  --special-distance 5 \
#  --special-distance2 10 \
#  --special-color yellow \
#  --special-color2 red \
#  --output assets/github.svg \
#  --use-localtime \
#  --min-distance 0.5
for type in github grid;do
create_poster --type $type 
              --gpx-dir GPX_OUT \
              --title "Just Keep Running" \
              --athlete "Wilson Xie" \
              --special-distance 10 \
              --special-distance2 20 \
              --special-color yellow \
              --special-color2 red \
              --output ./assets/"$type".svg
done
# #上线
# npm run serve -- --port 10083

git add .
git commit -m "update"
git push origin main
