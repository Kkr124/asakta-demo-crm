from .database import Base, engine, SessionLocal
from .models import Lead
Base.metadata.create_all(bind=engine)
db = SessionLocal()
seed = [
    Lead(name="Siri", email="siri@phincoelite.com", phone="9999999999", source="LinkedIn", status="CONTACTED"),
    Lead(name="Sudha", email="sudha@example.com", phone="8888888888", source="Referral", status="QUALIFIED"),
    Lead(name="Naren", email="naren@example.com", source="Website", status="NEW"),
]
for x in seed:
    db.add(x)
db.commit()
print("Seeded!")
