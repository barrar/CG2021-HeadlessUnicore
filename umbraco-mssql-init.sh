apt update
apt install -y unzip
mkdir /sqlpackage
cd /sqlpackage
curl -s -S -L https://aka.ms/sqlpackage-linux -o /sqlpackage/sqlpackage.zip
unzip sqlpackage.zip
chmod +x sqlpackage
./sqlpackage /Action:"Import" /SourceFile:"/CG2021.bacpac" /TargetConnectionString:"server=umbraco-mssql,1433;database=umbraco;user id=sa;password='Password123'"
